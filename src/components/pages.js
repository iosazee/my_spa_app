import { pageStyle } from "./styles"

const Home = () => {
    return (
        <div>
            <p>Want a quick guide on how to take good photos? Confused about photo terms you have come to the right place...</p>
        </div>
    )
}

const ShutterSpeed = () => {
    return (
        <div>
            <h3>Shutter Speed</h3>
            <p>
                <strong>Shutter Speed</strong> is how quickly your camera takes the picture.
            </p>
            <div style={pageStyle.table}>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        <strong>
                            Fast Shutter Speed:
                        </strong>
                    </div>
                    <div style={pageStyle.column}>
                        <strong>
                            Slow Shutter Speed:
                        </strong>
                    </div>
                </div>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        Clearer subjects when they are moving. Darker pictures because less light can enter your camera.
                    </div>
                    <div style={pageStyle.column}>
                        Blurrier subjects when they are moving. Brighter pictures because more light can enter your camera.
                    </div>
                </div>
            </div>
            <p>
                A shutter speed of 1/60 is the lowest speed you can get for a bright photo that is not noticeably blurry.
            </p>
        </div>
    )
}


const Aperture = () => {
    return (
        <div>
            <h3>Aperture</h3>
            <p>
                The <strong>Aperture</strong> is the camera lens opening that allows light in. The measurement of that opening is called the {""} <strong>F-Stop</strong>. The Aperture and F-Stop are inversely proportional.
            </p>
            <div style={pageStyle.table}>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        <strong>
                            Low F-Stop / High Aperture
                        </strong>
                    </div>
                    <div style={pageStyle.column}>
                        <strong>
                            High F-Stop / Low Aperture
                        </strong>
                    </div>
                </div>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        Your depth of field is very narrow. Your pictures will be brigjter and will have foreground and background blur.
                    </div>
                    <div style={pageStyle.column}>
                        Your depth of field is very wide. Your pictures will be darker but will have blurred backgrounds and foregrounds.
                    </div>
                </div>
            </div>
        </div>
    )
}


const ISO = () => {
    return (
        <div>
            <h3>ISO</h3>
            <p>Your camera's <strong>ISO</strong> is a measure of how sensitive your camera's sensors are to light.</p>
            <p>
                Increasing your camera's ISO makes your pictures brighter, but it also increases their <strong>noise</strong> or their grainy-ness. This is why night photos which usually are taken with high ISO, have black dots when you look closely. 
            </p>
            <div style={pageStyle.table}>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        <strong>Low ISO:</strong>
                    </div>
                    <div style={pageStyle.column}>
                        <strong>High ISO:</strong>
                    </div>
                </div>
                <div style={pageStyle.row}>
                    <div style={pageStyle.column}>
                        Your camera's sensors are not very sensitive, reducing overall brightness. This makes your pictures less noisy though.
                    </div>
                    <div style={pageStyle.column}>
                        Your camera's sensors are very sensitive to light, meaning brighter images. However, this makes your pictures more noisy.
                    </div>
                </div>
            </div>
        </div>
    )
}


const ContactUs = () => {
    return (
        <div>
            <h3>Contact Us</h3>
            <p>
                You can reach us via email on commonsense@commonsense.io or via our social media pages on facebook, instagram and twitter!
            </p>
        </div>
    )
}

export {Home, ShutterSpeed, Aperture, ISO, ContactUs };