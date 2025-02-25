if (window.location.protocol != 'file:') 
{
    let PRINT_TEAM = {
        // TEAMS
        print_items: function(data)
        {
            let card_container = document.getElementById('team_container');
    
            for (const key in data) 
            {
                if (Object.prototype.hasOwnProperty.call(data, key)) 
                {
                    const element = data[key];
                    
                    card_container.innerHTML += `
                       <a href="${element.link}" class="text-center text-decoration-none mx-3">
                            <img class="rounded-circle shadown" src="${element.image}" alt="">
                            <h5 class="fw-bold mt-2">${element.name}</h5>
                            <span class="text-muted">${element.rol}</span>
                        </a>
                    `;
                }
            }
        },
        // JSON
        read_json: function(url)
        {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                       throw new Error('Bad load JSON.');
                    }
                    return response.json();
                })
                .then(data => {
                    PRINT_TEAM.print_items(data);
                })
                .catch(error => {
                    console.error('Bad read JSON: ', error);
                });
        }
    }
    
    PRINT_TEAM.read_json('../data/team.json');
};
