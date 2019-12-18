import React from "react";
// import { Form, Input, Icon, Button } from "antd";
import { MyContext } from "../../context";

export default function ProfileContainer() {

  return (
    <MyContext.Consumer>
      {context => (
      <div>
      


      <div className="event-fondo">
      <div className="container">
        <div className="row detalle-perfil-div">
          <div className="col-12 col-md-5">
            <img
              src={`${context.user.image}`}
              alt="Foto de perfil"
            />
          </div>
          <div className="col-12 col-md-7">
            <h2 className="text-center mt-2 mt-md-5">
              {" "}
              <b> {context.user.name} {}</b>{" "}
            </h2>
            <p className="pt-4">{context.user.email} {}</p>
            <div className="text-center mt-2 mt-md-5">
              <a className="event-button" href={`/editprofile/${context.user._id}`} >
                Editar
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center p-3 p-md-5">
            <h2 className="titulo-mis-eventos">Mis eventos</h2>
          </div>
          <div className="row detalle-evento-privado-div my-3 ">
            <div className="col-12 col-md-4">
              <img
                src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/06/30/15619149195288.jpg"
                alt="Foto de evento"
                className="evento-privado-img py-auto"
              />
            </div>
            <div className="col-12 col-md-6 text-white">
              <h2 className="text-center">
                {" "}
                <b>Nombre del evento {} </b>{" "}
              </h2>
              <div className="py-3">
                <p>
                  <b>Fecha:</b>Fecha del evento{}
                </p>
                <p>
                  <b>Horario:</b>Horario del evento{}
                </p>
                <p>
                  <b>Descripción:</b>Descripcion{}
                </p>
              </div>
​
              <div className="text-center mt-2">
                <a className="event-button" href="/">
                  Detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




     
     </div>
      )}


    </MyContext.Consumer>
  );
}