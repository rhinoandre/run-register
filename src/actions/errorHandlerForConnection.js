// Code needed because fetch doesn't call catch when an HTTP error happen
// It just throws an error when the internet connection is down
// I could not test this behavior
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
export default function throwErrorForConnectionNotOK(response) {
  if (!response.ok) {
    throw response;
  }

  return response;
}
