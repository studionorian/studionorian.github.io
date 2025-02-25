if (window.location.protocol != 'file:') 
{
    let PRINT_PROJECTS = {
        // TAGS
        print_tags: function(tags)
        {
            let string = "";
    
            tags.forEach(element => {
                string += 
                `
                    <span class="badge rounded-pill bg-norian-dark color-norian-light p-2 shadow-sm">
                        ${element}
                    </span>
                `;
            });
        
            return string;
        },
        // LINKS
        print_links: function(links)
        {
            let string = "";
    
            links.forEach(element => {
                switch (element.name)
                {
                    case "GooglePlay":
                        string += 
                        `
                            <a href="${element.url}"  target="_blank"><img height="40px" src="img/google_play.png" alt=""></a>
                        `;
                        break;
                }
            });
            
            return string;
        },
        // CARDS
        print_cards: function(data)
        {
            let card_container = document.getElementById('card_container');
    
            for (const key in data) 
            {
                if (Object.prototype.hasOwnProperty.call(data, key)) 
                {
                    const element = data[key];
                    
                    card_container.innerHTML += `
                        <div class="col-10 col-md-8 card my-5 mx-auto p-0 bg-norian-light shadow">
                            <div class="row g-0">
                                <div class="col-lg-4 card-image" style="max-height: 360px;">
                                    <img src="${element.image}" alt="...">
                                </div>
                                <div class="col-lg-8 d-flex justify-content-center align-items-center p-2">
                                    <div class="card-body d-flex justify-content-center align-items-center flex-column">
                                        <h3 class="card-title text-capitalize">${element.name}</h3>
                                        <div class="mt-3">
                                            ${PRINT_PROJECTS.print_tags(element.tags)}
                                        </div>
                                        <p class="card-text text-center my-4">${element.description}</p>
                                        <div>
                                            ${PRINT_PROJECTS.print_links(element.links)}
                                        </div>
                                        <div>
                                            <a href="${element.repository}" target="_blank" class="btn btn-sm btn-outline-norian mt-3"><i class="bi bi-github"></i> GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    PRINT_PROJECTS.print_cards(data);
                })
                .catch(error => {
                    console.error('Bad read JSON: ', error);
                });
        }
    }
    
    PRINT_PROJECTS.read_json('../data/projects.json');
};
