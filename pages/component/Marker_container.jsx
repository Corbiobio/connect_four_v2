import React from 'react'

export default function Marker_container({ player_color, ref_use }) {

    return (
        <div className='marker_container' ref={ref_use}>
            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

            <div className='column_marker'>
                <svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="border_1">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="border_2" />
                    </defs>
                    <g transform="matrix(1 0 0 -1 -877 156)" fill="none" fillRule="evenodd"><use fill="#000" filter="url(#border_1)" xlinkHref="#border_2" />
                        <path stroke="#000" strokeWidth="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill={player_color} />
                    </g>
                </svg>
            </div>

        </div>
    )
}
