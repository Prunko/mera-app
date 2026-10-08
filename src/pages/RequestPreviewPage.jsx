import { useState, useEffect } from 'react';
import Section from '../components/layout/Section';
import RequestForm from '../components/requests/RequestForm';
import RequestSummary from '../components/requests/RequestSummary';
import EmptyState from '../components/common/EmptyState';
import useRoomSelection from '../hooks/useRoomSelection';

function createEmptyDraft() {
    return { purpose: '', needsHelp: false };
}

export default function RequestPreviewPage() {
    const { selectedItem, clearSelection } = useRoomSelection();
    const [draft, setDraft] = useState(createEmptyDraft);

    const title = selectedItem ? `Гуртожиток №1: ${selectedItem.name}` : 'Гуртожиток №1: Заявка';

    useEffect(() => {
        const previousTitle = document.title;
        document.title = title;
        return () => {
            document.title = previousTitle;
        };
    }, [title]);

    if (!selectedItem) {
        return (
            <EmptyState
                title="Кімнату не обрано"
                message="Будь ласка, оберіть кімнату в каталозі."
            />
        );
    }

    return (
        <main className="page-container">
            <Section title="Оформлення заявки" description={`Обрано: ${selectedItem.name}`}>
                <div className="request-layout">
                    <RequestForm
                        draft={draft}
                        onPurposeChange={(purpose) => setDraft((p) => ({ ...p, purpose }))}
                        onNeedsHelpChange={(needsHelp) => setDraft((p) => ({ ...p, needsHelp }))}
                        onReset={() => setDraft(createEmptyDraft())}
                    />
                    <RequestSummary roomName={selectedItem.name} draft={draft} />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={clearSelection}
                    >
                        Скасувати вибір кімнати
                    </button>
                </div>
            </Section>
        </main>
    );
}