import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'

import { connect, useSelector, useDispatch } from 'react-redux'

import styles from '../../style/style';
import { GenerateDateMonth, setDateMonth } from '../../actions';
import TabBackground from '../../components/TabBackground';
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../utils/constants';
import { panelScaleHeight, panelScaleWidth } from '../../utils/utils';

const Homescreen = ({ navigation }) => {
    const flatRef = useRef();
    const dispatch = useDispatch()
    const reducer = useSelector(state => state.fetchReducer)
    const [daysMonth, setDayMonth] = useState(reducer.dayMonth);
    const [calendarList, setCalendarList] = useState([
        {
            id: 1,
            title: 'การประชุม 1',
        },
        {
            id: 2,
            title: 'การประชุม 2',
        },
        {
            id: 3,
            title: 'การประชุม 3',
        }
    ])
    const [meetingList, setMeetingList] = useState([
        {
            id: 1,
            title: 'การประชุม 11',
        },
        {
            id: 2,
            title: 'การประชุม 22',
        }
    ])

    const ScrollToIndex = useCallback(() => {
        let dm = reducer.dayMonth
        if (dm != "") {
            let index = dm.findIndex((obj) => obj.dayActive === true);
            let monDay = dm[index].dayName
            if (monDay == 'จันทร์') {
                flatRef.current.scrollToIndex({
                    animated: true,
                    index: index
                });
            }
        }
    });

    useEffect(() => {
        ScrollToIndex()
    }, []);

    const _renderCalendarList = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.containerRow, styles.calendarItem]}>
                <View style={{ flex: 0.2 }}>
                    <View style={[styles.calendarItemIcon]}>
                        <Icon5 name="calendar" size={20} color={`white`} solid />
                    </View>
                </View>
                <View style={{ flex: 0.8 }}>
                    <Text style={[styles.fontBold, { fontSize: 14, color: 'white' }]}>{item.title}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}><Icon5 name="clock" size={12} color={'white'} solid />{` เวลา`}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}><Icon name="building" size={12} color={'white'} />{` อาคาร`}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderMeetingList = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.containerRow, styles.calendarItem]}>
                <View style={{ flex: 0.2 }}>
                    <View style={[styles.calendarItemIcon]}>
                        <Icon5 name="calendar" size={20} color={`white`} solid />
                    </View>
                </View>
                <View style={{ flex: 0.8 }}>
                    <Text style={[styles.fontBold, { fontSize: 14, color: 'white' }]}>{item.title}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}><Icon5 name="clock" size={12} color={'white'} solid />{` เวลา`}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}><Icon name="building" size={12} color={'white'} />{` อาคาร`}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.dayId}
                onPress={() => {
                    let dm = reducer.dayMonth
                    dm.map((v, i) => {
                        if (v.dayId == item.dayId) {
                            v.dayActive = true
                        } else {
                            v.dayActive = false
                        }
                    })
                    dispatch(setDateMonth(dm))
                }}
                style={{ backgroundColor: item.dayActive ? PRIMARY_COLOR : THIRD_COLOR, width: panelScaleWidth(84), height: panelScaleHeight(80), borderRadius: 20, alignItems: "center", justifyContent: "center", margin: 6 }}>
                <Text style={{ color: "white", fontSize: 10 }}>{item.dayName}</Text>
                <Text style={{ color: "white" }}>{item.dayNumber}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, styles.insidePanelContent]}>
                <View style={{ padding: 5 }}>
                    <Text style={[styles.fontBold, { fontSize: 14 }]}><Icon name="book" size={15} color={PRIMARY_COLOR} />{` ระบบสารบรรณอิเล็กทรอนิคส์ | eSaraban`}</Text>
                    <View>
                        <Text>Dashboard</Text>
                    </View>
                </View>
                <View style={[styles.hrGray]}></View>
                <View style={[styles.container]}>
                    <TouchableOpacity style={{ width: 'auto', alignSelf: 'flex-start', marginLeft: 5 }}
                        onPress={async () => {
                            let today = moment().format("D");
                            let dm = reducer.dayMonth
                            dm.map((v, i) => {
                                if (v.dayNumber == today) {
                                    v.dayActive = true
                                } else {
                                    v.dayActive = false
                                }
                            })
                            dispatch(setDateMonth(dm))
                            ScrollToIndex()
                        }}>
                        <Text style={[styles.fontBold, { fontSize: 14, color: PRIMARY_COLOR }]}>{`วันนี้`}</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={{ maxHeight: panelScaleHeight(95) }}
                        ref={flatRef}
                        data={daysMonth}
                        horizontal={true}
                        renderItem={_renderItem}
                        keyExtractor={(item) => item.dayId}
                        onScrollToIndexFailed={info => {
                            const wait = new Promise(resolve => setTimeout(resolve, 500));
                            wait.then(() => {
                                flatRef.current?.scrollToIndex({ index: info.index, animated: true });
                            });
                        }} />
                    <View style={[styles.containerRow, { justifyContent: 'space-between', padding: 5 }]}>
                        <TouchableOpacity style={{ width: 'auto', alignSelf: 'flex-start' }}>
                            <Text style={[styles.fontBold, { fontSize: 14 }]}><Icon name="list" size={15} color={PRIMARY_COLOR} />{` ระบบปฎิทินการใช้ห้องประชุม`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 'auto', alignSelf: 'flex-end' }}>
                            <Text style={[styles.fontBold, { fontSize: 14 }]}>{`see all`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.containerRow]}>
                        <View style={{ flex: 0.15, alignItems: 'center' }}>
                            <Text style={[styles.fontBold, { fontSize: 22, color: PRIMARY_COLOR }]}>{moment('2023-07-01').format('D')}</Text>
                            <Text style={[styles.fontBold, { fontSize: 12, color: PRIMARY_COLOR }]}>{moment('2023-07-01').format('MMMM')}</Text>
                        </View>
                        <View style={{ flex: 0.85, paddingRight: 5 }}>
                            <FlatList
                                data={calendarList}
                                renderItem={_renderCalendarList}
                                keyExtractor={(item) => item.id} />
                        </View>
                    </View>
                    <View style={[styles.containerRow, { justifyContent: 'space-between', padding: 5 }]}>
                        <TouchableOpacity style={{ width: 'auto', alignSelf: 'flex-start' }}>
                            <Text style={[styles.fontBold, { fontSize: 14 }]}><Icon name="book" size={15} color={PRIMARY_COLOR} />{` ตารางการประชุม`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 'auto', alignSelf: 'flex-end' }}>
                            <Text style={[styles.fontBold, { fontSize: 14 }]}>{`see all`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.containerRow]}>
                        <View style={{ flex: 0.15, alignItems: 'center' }}>
                            <Text style={[styles.fontBold, { fontSize: 22, color: PRIMARY_COLOR }]}>{moment('2023-07-02').format('D')}</Text>
                            <Text style={[styles.fontBold, { fontSize: 12, color: PRIMARY_COLOR }]}>{moment('2023-05-02').format('MMMM')}</Text>
                        </View>
                        <View style={{ flex: 0.85, paddingRight: 5 }}>
                            <FlatList
                                data={meetingList}
                                renderItem={_renderMeetingList}
                                keyExtractor={(item) => item.id} />
                        </View>
                    </View>
                </View>
            </View>
        </TabBackground>
    );
};

export default Homescreen;
