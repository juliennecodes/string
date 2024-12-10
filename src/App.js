import {BasicTable} from "./components/BasicTable";
import {config} from "./config/config";
import {Box, Typography} from "@mui/material";

const Navigation = ({headings}) => {
    const scrollToElement = (elementId) => {
        const el = document.getElementById(elementId);
        el.scrollIntoView();
    }
    return (
        headings.map(heading => {
            return <Typography key={`${heading}`}
                               component='p'
                               onClick={() => scrollToElement(heading)}
                               sx={{cursor: 'pointer'}}
            >{heading}</Typography>
        })
    )
}

function App() {
    const headings = config.categories.map((category) => category.heading);

    return (
        <Box className="app" display='grid' sx={{justifyContent: 'center'}}>
            <Box display='flex' flexDirection='column' id='sidebar'>
                <Box>
                    <Typography variant='h6' component='h1' id='mainHeading'>
                        {config.title}
                    </Typography>
                    <Navigation headings={headings} id='navigation'/>
                </Box>
            </Box>
            <Box display='grid' gap={8} id='mainContent'>
                {
                    config.categories
                        .map((category, index) => (
                            <BasicTable key={`${category.heading}-${index}`}
                                        heading={category.heading}
                                        subheading={category.subheading}
                                        rows={category.tableContents}/>
                        ))
                }
            </Box>

        </Box>
    );
}

export default App;
