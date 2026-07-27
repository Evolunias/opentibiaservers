import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-events');
}

export default function ZuneraOtEventsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-events" />;
}
