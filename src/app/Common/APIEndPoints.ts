export const prefixRoute = 'http://localhost:5190/api';

export const ApiEndpoints = {
    Endpoints: {
      GetDriver: `${prefixRoute}/Drivers`, //GET
      CreateDriver: `${prefixRoute}/Drivers`, //POST
      GetDriverById: `${prefixRoute}/Drivers`, //GET
      ExportData: `${prefixRoute}/Drivers/ExportData`, //GET
      UpdateDriver: `${prefixRoute}/Drivers`, //PUT
      DeleteDriver: `${prefixRoute}/Drivers`, //DELETE
    },
  };
  