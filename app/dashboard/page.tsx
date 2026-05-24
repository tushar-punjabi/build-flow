
const cols = ['Backlog','Todo','Doing','Review','Done']
export default function Dashboard() {
  return (
    <main style={{padding:20}}>
      <h1>Kanban Board</h1>
      <div style={{display:'flex',gap:16,overflow:'auto'}}>
        {cols.map(c=>(
          <div key={c} style={{minWidth:220,border:'1px solid #ddd',padding:12,borderRadius:8}}>
            <h3>{c}</h3>
            <div style={{background:'#f3f3f3',padding:10,borderRadius:6}}>
              Sample Ticket
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
