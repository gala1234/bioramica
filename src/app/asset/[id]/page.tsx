import React from 'react';

type ActivoPageProps = {
  params: {
    id: string;
  };
};

const ActivoPage = ({ params }: ActivoPageProps) => {
  return (
    <main>
      <h1 className="text-3xl font-bold">Ficha de Activo: {params.id}</h1>
      <p>Ficha Técnica Inmersiva con precio y compra.</p>
    </main>
  );
};

export default ActivoPage;
