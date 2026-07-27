import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-baiak-server');
}

export default function ZuneraOt14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-baiak-server" />;
}
