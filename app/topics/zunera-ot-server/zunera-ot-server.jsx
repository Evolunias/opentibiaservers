import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-server');
}

export default function ZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-server" />;
}
