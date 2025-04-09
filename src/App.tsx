import "./App.css"
import { useFoodStore } from "./stores/useFoodStore"

function App() {
  const logs = useFoodStore((state) => state.logs)
  const addLog = useFoodStore((state) => state.addLog)

  const handleAdd = () => {
    const newLog = {
      id: Date.now().toString(),
      name: "雞腿便當",
      calories: 750,
      createdAt: new Date().toString(),
    }
    addLog(newLog)
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-9xl font-bold text-blue-600">🍱 熱量管理系統</h1>
      <p className="text-gray-500 text-6xl">Tailwind 成功啟用！</p>

      <ul className="mt-4 space-y-2">
        {logs.map((log) => (
          <li key={log.id} className="p-2 border rounded-md bg-white shadow-sm">
            <div className="text-6xl font-semibold">{log.name}</div>
            <div className="text-6xl text-gray-500">
              {log.calories} kcal · {log.createdAt.toLocaleString()}
            </div>
          </li>
        ))}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white text-6xl rounded-lg"
        onClick={handleAdd}
      >
        ➕ 新增一筆紀錄
      </button>
    </div>
  )
}

export default App
