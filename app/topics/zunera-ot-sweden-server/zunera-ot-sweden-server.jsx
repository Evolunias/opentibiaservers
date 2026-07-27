import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-sweden-server');
}

export default function ZuneraOtSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-sweden-server" />;
}
