export const modalsActionTypes = {
    SET: "SET",
    GET: "GET"
};

export const getModalConfigs =()=> {
      return {type: modalsActionTypes.GET};  
}

export const setModalConfigs = (config) => {
        return {type: modalsActionTypes.SET, modal_config: config};
}

