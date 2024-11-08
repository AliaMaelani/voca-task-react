import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm';
import TaskCard from '../components/TaskCard';
import TaskDoneSection from '../components/TaskDoneSection';
import ProfileSection from '../components/ProfileSection';
import CountTasks from '../components/CountTasks';

const Task = () => {
  // Inisialisasi task dengan beberapa data yang sudah diisi
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Pelajari Modul React.js di Vocasia' },
    { id: 2, name: 'Tulis Dokumentasi Project React.js' },
    { id: 3, name: 'Uji Fitur Aplikasi React.js' }
  ]);

  // Inisialisasi doneTasks dengan beberapa tugas yang sudah selesai
  const [doneTasks, setDoneTasks] = useState([
    { id: 101, name: 'Pelajari Praktik Terbaik React untuk Proyek Vocasia' },
    { id: 102, name: 'Pelajari Hook React Lanjutan untuk Proyek Vocasia' },
  ]);

  const navigate = useNavigate();

  // Muat data pengguna dari localStorage
  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'User',
    avatar: localStorage.getItem('userAvatar') || '',
  });

  useEffect(() => {
    // Perbarui info pengguna ketika data di localStorage berubah
    const handleStorageChange = () => {
      setUser({
        name: localStorage.getItem('userName') || 'User',
        avatar: localStorage.getItem('userAvatar') || '',
      });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleAddTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const handleDoneTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setDoneTasks([...doneTasks, task]);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditProfile = () => {
    navigate('/update-profile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar'); // Hapus avatar saat sign out
    navigate('/login');
  };

  return (
    <div className="flex space-x-4 p-6 bg-gray-900 min-h-screen">
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg flex justify-center items-center">
        <ProfileSection user={user} onEditProfile={handleEditProfile} onSignOut={handleSignOut} />
      </div>
      <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
        <AddTaskForm onAddTask={handleAddTask} />

        <div className="mt-10">
          <CountTasks count={tasks.length} />
        </div>

        <div className="space-y-4 mt-8">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDone={handleDoneTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks to do.</p>
          )}
        </div>

       {/* Render Bagian untuk Done Tasks */}
        {doneTasks.length > 0 && (
          <div className="mt-10">
            <TaskDoneSection tasks={doneTasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;