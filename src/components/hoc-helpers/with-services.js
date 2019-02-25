import React from 'react';

const {
    Provider : ServiceProvider,
    Consumer : ServiceConsumer
  } = React.createContext();
   
  const withServices = (mapServicesToProps) => (Wrapped) => {
    return (props) => {
      return (
        <ServiceConsumer>
          {
            (services) => {
              const serviceProps = mapServicesToProps(services);
   
              return (
                <Wrapped {...props} {...serviceProps} />
              );
            }
          }
        </ServiceConsumer>
      );
    }
  };

  export {
    ServiceProvider,
    ServiceConsumer,
    withServices
  };