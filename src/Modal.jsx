import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'basePath/views/components/common/form/formFields';
if (sc.isFromMsite) {
    import('cssBasePath/mobile/sass/modal.scss');
} else {
    import('cssBasePath/candidate/sass/modal.scss');
}
export function Modal(props) {
    const {
        modalHeader,
        customClass,
        closeCallback,
        children,
        actionCallBackFunction,
        cancelButtonId,
        saveButtonId,
        saveButtonName,
        cancelButtonName,
        showHeaderCancelButton,
        showBottomCancelButton
    } = props;
    let $submitButtonClass = sc.isFromMsite ? 'search-btn' : 'highlight_button';
    let $cancelButtonClass = 'normal_button';
    let $showActionButton = 'inline';
    let modalStyle = sc.isFromMsite ? { width: '85%' } : {};
    return (
        <React.Fragment>
            <div className={`modal ${customClass}`}>
                <div className="overlay"></div>
                <div className="modal_content" style={modalStyle}>
                    {modalHeader ? (
                        <div className="modal_titlebar">
                            <span id="ui-id-1">{modalHeader}</span>
                            {closeCallback && (
                                <a className="close" id={cancelButtonId} onClick={closeCallback}>
                                    <span className=""></span>
                                </a>
                            )}
                        </div>
                    ) : showHeaderCancelButton ? (
                        <a className="close" id={cancelButtonId} onClick={closeCallback}>
                            <span className=""></span>
                        </a>
                    ) : (
                        ''
                    )}
                    <div
                        className="modal_children"
                        // style={{ width: 'auto', height: 'auto', visibility: 'visible', display: 'block' }}
                    >
                        {children}
                    </div>
                    {(actionCallBackFunction || closeCallback) && (
                        <div className="">
                            <div className="popup_button_pannel">
                                {actionCallBackFunction ? (
                                    <Button
                                        type="button"
                                        className={$submitButtonClass}
                                        id={saveButtonId}
                                        onClick={actionCallBackFunction}
                                        value={saveButtonName}
                                        style={{ display: $showActionButton }}
                                    />
                                ) : (
                                    ''
                                )}
                                {closeCallback && showBottomCancelButton ? (
                                    <Button
                                        className={$cancelButtonClass}
                                        id={cancelButtonId}
                                        onClick={closeCallback}
                                        value={cancelButtonName}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
Modal.propTypes = {
    customClass: PropTypes.string,
    closeCallback: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    actionCallBackFunction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    children: PropTypes.element,
    cancelButtonId: PropTypes.string,
    saveButtonId: PropTypes.string,
    cancelButtonName: PropTypes.string,
    saveButtonName: PropTypes.string,
    modalHeader: PropTypes.string,
    showHeaderCancelButton: PropTypes.bool,
    showBottomCancelButton: PropTypes.bool
};
Modal.defaultProps = {
    customClass: '',
    closeCallback: false,
    actionCallBackFunction: false,
    children: <div></div>,
    cancelButtonId: '',
    saveButtonId: '',
    cancelButtonName: 'No',
    saveButtonName: 'Yes',
    modalHeader: '',
    showHeaderCancelButton: true,
    showBottomCancelButton: true
};
