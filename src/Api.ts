const url = "https://random-data-api.com/api/v2/users?size=11"

export const getProfiles = async () => {
    const response = await fetch(url)
    const profiles = response.json()
    return profiles
}