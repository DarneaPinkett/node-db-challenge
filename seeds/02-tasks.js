
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {TaskDescription: "Running Daily", notes: 'Run 1 mile from Sunday-Wednesday', Completed: false, Project_id: 2 },
        {TaskDescription: "Planking", notes: 'no notes', Completed: false, Project_id: 2 },
        {TaskDescription: "Tape", notes: 'Tape off room', Completed: false, Project_id: 3 },
        {TaskDescription: 'Paint', notes: 'Apply base coat', Completed: false,  Project_id: 3 },
        {TaskDescription: 'Make sketches', notes: 'decide on still or live drawing', Completed: false,  Project_id: 1 },
        {TaskDescription: 'Paint', notes: 'Apply base coat', Completed: false,  Project_id: 3 },

      ]);
    });
};
