import React from 'react';

type ActivoPageProps = {
  params: {
    id: string;
  };
};

const ActivoPage = ({ params }: ActivoPageProps) => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <h1 className="text-3xl font-bold">Ficha de Activo: {params.id}</h1>
      <p>Ficha Técnica Inmersiva con precio y compra.</p>
    </div>
  );
};

export default ActivoPage;
