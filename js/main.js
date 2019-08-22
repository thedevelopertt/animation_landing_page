// initializeTimelineMax
function _privateinitializeTimelineMax(){

    const _timeline =  new TimelineMax({});
    var timeline = _timeline;

    const _headerTitle = ".landing-page-title-header";
    var headerTitle = _headerTitle;

    const _landingAction = ".landing-page-action-container";
    var landingAction = _landingAction;

    timeline
        .from(
            headerTitle,
            0.5,
            {
                bottom : -100,
                opacity : 0
            }
        )
        .from(
            landingAction,
            1,
            {
                bottom: -50,
                opacity: 0,
            }
        )

}

const initializeTimelineMax = _privateinitializeTimelineMax;
//initializeTimelineMax


$(document).ready(initializeTimelineMax)