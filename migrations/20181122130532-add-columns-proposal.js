module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('proposals', 'resultMembershipHash', Sequelize.STRING(150)),
    queryInterface.addColumn('proposals', 'resultMembershipUrls', Sequelize.STRING(2000)),
    queryInterface.addColumn('proposals', 'resultVotersHash', Sequelize.STRING(150)),
    queryInterface.addColumn('proposals', 'resultVotersUrls', Sequelize.STRING(2000)),
    queryInterface.addColumn('proposals', 'resultBallotHash', Sequelize.STRING(150)),
    queryInterface.addColumn('proposals', 'resultBallotUrls', Sequelize.STRING(2000)),
    queryInterface.addColumn('proposals', 'resultCount', Sequelize.INTEGER),
    queryInterface.addColumn('proposals', 'resultYes', Sequelize.INTEGER),
    queryInterface.addColumn('proposals', 'resultNo', Sequelize.INTEGER),
    queryInterface.addColumn('proposals', 'resultAbs', Sequelize.INTEGER),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.removeColumn('proposals', 'resultMembershipHash'),
    queryInterface.removeColumn('proposals', 'resultMembershipUrls'),
    queryInterface.removeColumn('proposals', 'resultVotersHash'),
    queryInterface.removeColumn('proposals', 'resultVotersUrls'),
    queryInterface.removeColumn('proposals', 'resultBallotHash'),
    queryInterface.removeColumn('proposals', 'resultBallotUrls'),
    queryInterface.removeColumn('proposals', 'resultCount'),
    queryInterface.removeColumn('proposals', 'resultYes'),
    queryInterface.removeColumn('proposals', 'resultNo'),
    queryInterface.removeColumn('proposals', 'resultAbs'),
  ]),
};