function customRender( reactElement, container ) {
    // const domElement = document.createElement( reactElement.type )

    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute( 'href', reactElement.props.href )
    // domElement.setAttribute( 'target', reactElement.props.target )

    // container.appendChild( domElement );

    // ///////////////////////////////////////////////////////////////////////////////////////// OR

    const domElement = document.createElement( reactElement.type )
    domElement.innerHTML = reactElement.children

    for ( var p in reactElement.props ) {
        domElement.setAttribute( p, reactElement.props[ p ] )
    }

    container.appendChild( domElement )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit GOOGLE'
}

const mainContainer = document.querySelector( "#root" );

customRender( reactElement, mainContainer )

