import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-baiak-server');
}

export default function ZuneraOt12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-baiak-server" />;
}
