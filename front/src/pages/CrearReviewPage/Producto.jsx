function CrearReviewPage() {
  const { BASE_URL, PRODUCTOS_ENDPOINT, RESERVAS_ENDPOINT } = environment;

  const { id_producto } = useParams();

  const {
    data: producto,
    isLoading,
    error,
  } = useFetch(`${BASE_URL}${PRODUCTOS_ENDPOINT}${id_producto}`);
  const { data: reservas } = useFetch(
    `${BASE_URL}${RESERVAS_ENDPOINT}porProducto/${id_producto}`
  );

  const { newProd } = useContext(ProdContext);
  useEffect(() => {
    newProd(producto, reservas);
  }, [producto, reservas, newProd]);

  return (
    <LayoutGeneral>
      {isLoading ? (
        <LoadingBar />
      ) : error ? (
        <Error info={"Error al cargar el producto"} />
      ) : (
        <>
        </>
      )}
    </LayoutGeneral>
  );
}

export default Producto;
