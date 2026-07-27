import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-events');
}

export default function YurotsEventsKeywordPage() {
  return <StaticKeywordPage slug="yurots-events" />;
}
