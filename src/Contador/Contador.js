import React, { useState } from 'react';
export function Contador() {

    const [cont, setCont] = useState(0);

    return (
        <div>
            <p>Relojes reparados: {cont}</p>
            <button onClick={() => setCont(cont + 1)}>Reloj reparado</button>
        </div>
    );
}