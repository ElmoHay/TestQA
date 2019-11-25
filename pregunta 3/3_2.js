function obtenerPropiedades(objPersona, propiedad)
{
	if(propiedad==='nombre')
		return objPersona.nombre;
	else if(propiedad==='apellido')
		return objPersona.apellido;
	else if(propiedad==='telefono')
		return objPersona.telefono;
	else if(propiedad==='email')
		return objPersona.email;
	else if(propiedad==='todas')
		return objPersona.nombre +" "+objPersona.apellido+", tel.: " +objPersona.telefono.toString()+", correo: " + objPersona.email
}