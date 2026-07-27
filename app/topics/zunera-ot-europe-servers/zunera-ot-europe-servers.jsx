import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-europe-servers');
}

export default function ZuneraOtEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-europe-servers" />;
}
