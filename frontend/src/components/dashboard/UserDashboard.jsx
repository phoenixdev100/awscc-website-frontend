import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Bell,
  User,
  Settings,
  LogOut,
  BookOpen,
  Award,
  TrendingUp,
  Activity,
  Home
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { usersAPI, eventsAPI } from '../../services/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [availableEvents, setAvailableEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    fetchAvailableEvents();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await usersAPI.getDashboard();
      if (response.success) {
        setDashboardData(response.data);
      }
    } catch (error) {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableEvents = async () => {
    try {
      const response = await eventsAPI.getEvents({ status: 'upcoming' });
      if (response.success) {
        setAvailableEvents(response.data.events || []);
      }
    } catch (error) {
      console.error('Failed to load available events');
    }
  };

  const handleUnregister = async (eventId) => {
    try {
      const response = await usersAPI.unregisterFromEvent(eventId);
      if (response.success) {
        toast.success('Successfully unregistered from event');
        fetchDashboardData(); // Refresh data
      }
    } catch (error) {
      toast.error('Failed to unregister from event');
    }
  };

  const handleRegister = async (eventId) => {
    try {
      const response = await usersAPI.registerForEvent(eventId);
      if (response.success) {
        toast.success('Successfully registered for event');
        fetchDashboardData(); // Refresh data
        fetchAvailableEvents(); // Refresh available events
      }
    } catch (error) {
      toast.error('Failed to register for event');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* User Dashboard Navbar - Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                <Home className="h-5 w-5" />
                <span className="hidden sm:block text-sm font-medium">Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  My Dashboard
                </h1>
              </div>
            </div>

            {/* Center - Quick Stats (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.totalRegistrations || 0}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Events</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.upcomingEvents || 0}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Upcoming</div>
              </div>
            </div>

            {/* Right side - User Menu */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Add padding-top for fixed navbar */}
      <div className="pt-16">
        {/* Header - Concise */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h2 className="text-xl font-bold">Welcome back, {user?.name}! 👋</h2>
              <p className="text-blue-100 mt-1 text-sm">My Dashboard</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Registrations
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.totalRegistrations || 0}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Upcoming Events
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.upcomingEvents || 0}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Completed Events
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.completedEvents || 0}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
          >
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Certificates
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dashboardData?.stats?.completedEvents || 0}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registered Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                My Registered Events
              </h2>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              {dashboardData?.registeredEvents?.length > 0 ? (
                <div className="space-y-4">
                  {dashboardData.registeredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {event.description}
                          </p>
                          <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                        <div className="ml-4 flex flex-col items-end">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              event.status === 'UPCOMING'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                : event.status === 'ONGOING'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                            }`}
                          >
                            {event.status}
                          </span>
                          {event.status === 'UPCOMING' && (
                            <button
                              onClick={() => handleUnregister(event.id)}
                              className="mt-2 text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            >
                              Unregister
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    You haven't registered for any events yet.
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                    Check out available events to get started!
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Available Events & Announcements */}
          <div className="space-y-8">
            {/* Available Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Available Events
                </h2>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {availableEvents.length > 0 ? (
                  <div className="space-y-4">
                    {availableEvents.slice(0, 5).map((event) => (
                      <div
                        key={event.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Users className="h-4 w-4 mr-1" />
                            {event._count?.registrations || 0} / {event.maxParticipants} registered
                          </div>
                          <button
                            onClick={() => handleRegister(event.id)}
                            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={event._count?.registrations >= event.maxParticipants}
                          >
                            {event._count?.registrations >= event.maxParticipants ? 'Full' : 'Register'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      No upcoming events available.
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                      Stay tuned for exciting events!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Recent Announcements
                </h2>
              </div>
              <div className="p-6">
                {dashboardData?.announcements?.length > 0 ? (
                  <div className="space-y-4">
                    {dashboardData.announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4"
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {announcement.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {announcement.content}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                              By {announcement.creator.name} • {' '}
                              {new Date(announcement.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          {announcement.priority === 'high' && (
                            <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                    No recent announcements.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
