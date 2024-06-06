const router = require('express').Router()
const { getAllGoals, getSingleGoal, createGoal, updateGoal, deleteGoal} = require('../controller/goalController');

router.route('/').get(getAllGoals).post(createGoal)
router.route('/:goalId').get(getSingleGoal).patch(updateGoal).delete(deleteGoal)
// router.get('/', getAllGoals)
// router.post('/', createGoal)
// router.get('/:goalId', getSingleGoal)
// router.patch('/:goalId', updateGoal)
// router.delete('/:goalId', deleteGoal)

module.exports = router