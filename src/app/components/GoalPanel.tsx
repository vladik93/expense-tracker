import GoalItem from './GoalItem'

const GoalPanel = () => {
  return (
    <div className="mb-4">
      <h3 className="mb-4">Goal Panel</h3>
      <div className="flex w-full gap-2">
        <GoalItem />
        <GoalItem />
        <GoalItem />
      </div>
    </div>
  )
}


export default GoalPanel;