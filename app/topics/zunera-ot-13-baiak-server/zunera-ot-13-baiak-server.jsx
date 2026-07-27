import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-baiak-server');
}

export default function ZuneraOt13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-baiak-server" />;
}
