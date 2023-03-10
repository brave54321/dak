import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react-hooks';
import { useRequest } from '../../../Infrastructure/Adapters/Store/Dispatchers/ManageRequests';
//import { prettyDOM } from '@testing-library/dom'

const mockRequest = {
    userId: "testUID",
    resource: "testResourceID",
    id: "test_object_id_1",
    index: 0
}

test('Requests reducer updates the state. type=accept ', () => {
    const { result } = renderHook(() => useRequest())

    const [state, { acceptRequest, deleteRequest }] = result.current

    // Check that the initial state values are undefined
    expect(state.params["accountId"]).toBe(undefined)
    expect(state.params["id"]).toBe(undefined)
    expect(state.params["acl"]).toBe(undefined)

    act(() => {
        acceptRequest(mockRequest, mockRequest.index)
    }) 

    // Check that the state values have been changed with the mockRequest values.
    expect(result.current[0].params["accountId"]).toBe("testUID")
    expect(result.current[0].params["id"]).toBe("test_object_id_1")
    expect(result.current[0].params["acl"]).toBe("testResourceID")
})

// test( deleteRequest reducer ) -> Implementation of this reducer is still needed
