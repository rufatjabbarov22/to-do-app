import React, { useState } from 'react';
import { Box, Typography, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (event) => {
    if (event.key === 'Enter' && newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false, favorite: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleFavorite = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, favorite: !task.favorite } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box width="300px" bgcolor="#333" p={2}>
        <Typography variant="h6" color="white">
          My Day
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="My Day" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Important" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Planned" />
          </ListItem>
        </List>
      </Box>

      {/* Main content with background image */}
      <Box 
        flexGrow={1} 
        p={3}
        style={{
          backgroundImage: 'url(/neon.webp)', // Change this to your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4" color="white">
          Focus on your day
        </Typography>

        <Box mt={2}>
          <TextField 
            fullWidth 
            placeholder="Add a task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            onKeyPress={handleAddTask}
            variant="outlined"
            sx={{ backgroundColor: 'white' }}
          />
        </Box>

        <List>
          {tasks.map((task, index) => (
            <ListItem 
              key={index} 
              button 
              onClick={() => toggleTaskCompletion(index)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              <ListItemText primary={task.text} />
              {/* Favorite button */}
              <IconButton onClick={() => toggleFavorite(index)}>
                {task.favorite ? <StarIcon style={{ color: 'gold' }} /> : <StarBorderIcon />}
              </IconButton>
              {/* Delete button */}
              <IconButton onClick={() => deleteTask(index)}>
                <DeleteIcon style={{ color: 'red' }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TaskList;
