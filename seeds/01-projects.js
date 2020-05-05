
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {ProjectName: 'Drawing', ProjectDescription: 'Make a drawing a week', Completed:false },
        {ProjectName: 'Excercising', ProjectDescription: 'Running and planks', Completed:false },
        {ProjectName: 'Painting', ProjectDescription: 'Paint room', Completed:false}
      ]);
    });
};
