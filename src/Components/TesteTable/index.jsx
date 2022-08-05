import './style.css';

function ExampleTable() {
  return (
    <div className="table-container">
      <h1 className="heading">Responsive Table UOL</h1>

      <table className="table">
        <thead>
          <tr>
            <th><input type="checkbox" name="checkall" id="" /></th>
            <th>Site</th>
            <th>Status</th>
            <th>Observação</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td data-label=""><input type="checkbox" name="" id="" /></td>
            <td data-label="site"><a href="#">meusite.com.br</a></td>
            <td data-label="status">aprovado</td>
            <td data-label="observação">site aprovado para veiculação de anúncios</td>
            <td data-label="">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td data-label=""><input type="checkbox" name="" id="" /></td>
            <td data-label="site"><a href="#">meusite.com.br</a></td>
            <td data-label="status">aprovado</td>
            <td data-label="observação">site aprovado para veiculação de anúncios</td>
            <td data-label="">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          
          <tr>
            <td data-label=""><input type="checkbox" name="" id="" /></td>
            <td data-label="site"><a href="#">meusite.com.br</a></td>
            <td data-label="status">aprovado</td>
            <td data-label="observação">site aprovado para veiculação de anúncios</td>
            <td data-label="">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ExampleTable
