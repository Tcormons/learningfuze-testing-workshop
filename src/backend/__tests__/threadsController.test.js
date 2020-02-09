import { threadsController } from '../threadsController';

describe('threadsController', () => {
  test('GET method should return 200 with list of threads', () => {
    //arrage
    const req = {
      method: 'GET'
    }

    const myMock = jest.fn()
    // res.status().json();

    const res = {
      status: () => {
        return {
          json: myMock,
        }
      }
    }


    //act
    threadsController(req, res);
    //assert
    console.log(myMock.mock.calls);
    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith([{ "comments": ["5tvf1vv39", "7sack1xhe"], "content": "This is the content for the thread", "id": "n4uajfhps", "reactions": { "👍": 20, "🔥": 30 }, "title": "My first thread!" }, { "comments": ["n99putsfi"], "content": "This is the content for the second thread, it's got some stuffz", "id": "624p8jvnk", "reactions": { "🚀": 3 }, "title": "Another cool thread" }])
  })
})
