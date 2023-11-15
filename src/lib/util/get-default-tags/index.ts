import { v4 as uuidv4 } from "uuid";

export const getDefaultTags = (tagName: string) => {
  switch (tagName) {
    case 'mj-image': {
      return {
        tagName,
        attributes: {
          'width': '200px',
          'height': '200px',
          'src': 'https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg',
          'padding-left': '0px',
          'padding-right': '0px',
          'padding-top': '0px',
          'padding-bottom': '0px',

        },
        children: [],
        id: uuidv4()
      };
    }

    case 'mj-section': {
      return {
        tagName,
        attributes: {},
        "children": [],
        id: uuidv4()
      }
    }

    case 'mj-spacer': {
      return {
        tagName: 'mj-spacer',
        attributes: {
          "height": "50px",
          "line-height": "50px"
        },
        children: []
      }
    }

    case 'mj-text': {
      return {
        tagName,
        attributes: {
          'padding-top':"20px",
            'padding-right':"20px",
            'padding-bottom':"20px",
            'padding-left':"20px",
            'height': '50px',
            'color':"#ffffff",
            'font-family':"Helvetica",
            'align':"center",
            'font-size':"45px",
            'line-height':"45px",
            'font-weight':"bold",
            'font-style':"normal",
            'text-decoration': 'none',
            'letter-spacing':"none",
            'container-background-color': 'black',
        },
        content: 'Dummy text',
        id: uuidv4()

      }
    }

    case 'mj-column': {
      return {
        tagName,
        attributes: {},
        "children": [],
        id: uuidv4()

      }
    }

    case 'mj-button': {
      return {
        tagName,
        attributes: {
          "href":"https://mjml.io/",
          "align":"center",
          "background-color": "#008000",
          "color": "#ffffff",
          "border-radius": "20%"
        },
        content: "Button text",
        id: uuidv4()

      }
    }

    case 'mj-hero': {
      return {
        tagName,
        attributes: {
        'mode':"fixed-height",
        "height":"400px",
        'background-height':"400px",
        'background-width':"600px",
        'background-url': "https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg",
        'background-color':"#2a3448",
        'padding': "100px 0px 100px 0px",
      },
        "children": [{
          tagName: 'mj-text',
          attributes: {
            'padding-top':"20px",
            'padding-right':"20px",
            'padding-bottom':"20px",
            'padding-left':"20px",
            'height': '50px',
            'color':"#ffffff",
            'font-family':"Helvetica",
            'font-weight':"bold",
            'align':"center",
            'font-size':"45px",
            'font-style':"normal",
            'line-height':"45px",
            'letter-spacing':"none",
            'text-decoration': 'none',
            'container-background-color': 'black'
          },
          content: "GO TO SPACE",
          children: [],
          id: uuidv4()
        }, {
          tagName: 'mj-button',
          attributes: {
            "href":"https://mjml.io/",
            "align":"center",
            "background-color": "#008000",
            "color": "#ffffff",
            "border-radius": "20%"
          },
          content: "ORDER YOUR TICKET NOW",
          id: uuidv4()
        }],
        id: uuidv4()
      }
    }

    default:
      break;
  }

}
