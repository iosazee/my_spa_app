export const wrapperStyle = {
    wrapper: {
        width: "100%",
        fontFamily: "Times New Roman, Verdana, Arial, sans-serif",
        fontSize: 16,
        padding: 16,
        boxSizing: "border-box",
        textAlign: "center",
        backgroundColor: "#00FF00"
    }
}

export const navStyle = {
    nav: {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        backgroundColor: "blue"
    },

    navButton: {
        flexBasis: "100",
        flexShrink: "1",
        margin: 2,
        padding: 8,
        fontSize: 12,
        backgroundColor: "#F0FFF0"
    }
}

export const pageStyle = {
    table: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch"
    },

    row: {
        width: "100%",
        marginBottom: 4,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    
    column: {
        flexBasis: "50%",
        flexShrink: 1,
        flexGrow: 0,
        marginLeft: 4,
        marginRight: 4
    }
}