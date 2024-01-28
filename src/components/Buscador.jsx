// Buscador.jsx
const Buscador = ({ search, onChange }) => {
    return (
        <>
            <form className="d-flex text-white" role="search">
                <input
                    className="form-control me-2 my-3"
                    type="search"
                    placeholder="Busca un colaborador"
                    aria-label="Search"
                    value={search}
                    onChange={onChange}
                />
            </form>
        </>
    );
};

export default Buscador;
