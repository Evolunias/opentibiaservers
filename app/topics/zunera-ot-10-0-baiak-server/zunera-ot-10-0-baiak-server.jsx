import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-baiak-server');
}

export default function ZuneraOt100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-baiak-server" />;
}
