
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {ResourcesName: 'Youtube', ResourcesDescription: 'search drawing techniques', Project_id:1 },
        {ResourcesName: 'Fitbit', ResourcesDescription: 'Watch to monitor running', Project_id:2 },
        {ResourcesName: 'Home Depot', ResourcesDescription: 'Store near you', Project_id:3 },
      ]);
    });
};
