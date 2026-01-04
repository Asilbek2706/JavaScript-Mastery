const apiConfig = {
    appName: "ProDev Manager",
    theme: "dark",

    notifications: {
        email: true,
        push: 0,
        sms: null
    },
    version: null,
    maintenance: false
}

const settingsManager = {
    render() {
        const panel = document.querySelector('#settings-panel')

        const language = apiConfig.userPreference?.language || 'Uzbek'

        const appVersion = apiConfig.version ?? "v2.1.0"

        const pushStatus = apiConfig.notifications.push ?? "Unknown"

        const maintenanceMsg = apiConfig.maintenance && "⚠️ The server is under construction!"

        panel.innerHTML = `
            <div class="setting-item">
                <label>Program name:</label>
                <span>${apiConfig.appName}</span>
            </div>
            <div class="setting-item">
                <label>Language:</label>
                <span>${language}</span>
            </div>
            <div class="setting-item">
                <label>Version:</label>
                <span>${appVersion}</span>
            </div>
            <div class="setting-item">
                <label>Push Status:</label>
                <span>${pushStatus === 0 ? "Deleted" : pushStatus}</span>
            </div>
            <div class="setting-item">
                <label>Email:</label>
                <span>${apiConfig.notifications.email ? "On" : "Off"}</span>
            </div>
            <div style="color: #e74c3c; font-weight: bold;">
                ${maintenanceMsg || ""}
            </div>
        `
    }
}

settingsManager.render()