import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-poland-servers');
}

export default function ZuneraOtPolandServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-poland-servers" />;
}
