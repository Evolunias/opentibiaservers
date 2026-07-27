import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-poland-server');
}

export default function ZuneraOtPolandServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-poland-server" />;
}
