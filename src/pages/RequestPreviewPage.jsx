import { useEffect, useState } from 'react';
import Section from '../components/layout/Section';
import RequestForm from '../components/requests/RequestForm';
import RequestSummary from '../components/requests/RequestSummary';
import EmptyState from '../components/common/EmptyState';
import Button from '../ui/Button';

function createEmptyDraft() {
    return { purpose: '', needsHelp: false };
}

export default function RequestPreviewPage({ item, onClearSelection }) {
    const [draft, setDraft] = useState(createEmptyDraft);

    const title = item ? `Гуртожиток №1: ${item.name}` : 'Гуртожиток №1: Заявка';

    useEffect(() => {
        const previousTitle = document.title;
        document.title = title;
        return () => {
            document.title = previousTitle;
        };
    }, [title]);

    if (!item) {
        return <EmptyState title="Кімнату не обрано" message="Будь ласка, оберіть кімнату в каталозі." />;
    }

    return (
        <main className="page-container">
            <Section title="Оформлення заявки" description={`Обрано: ${item.name}`}>
                <div className="request-layout">
                    <RequestForm
                        draft={draft}
                        onPurposeChange={(purpose) => setDraft((p) => ({ ...p, purpose }))}
                        onNeedsHelpChange={(needsHelp) => setDraft((p) => ({ ...p, needsHelp }))}
                        onReset={() => setDraft(createEmptyDraft())}
                    />
                    <RequestSummary roomName={item.name} draft={draft} />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <Button variant="outline" onClick={onClearSelection}>
                        Скасувати вибір кімнати
                    </Button>
                </div>
            </Section>
        </main>
    );
}