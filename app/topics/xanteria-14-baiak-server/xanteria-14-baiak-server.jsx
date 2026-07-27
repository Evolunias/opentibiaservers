import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-baiak-server');
}

export default function Xanteria14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-baiak-server" />;
}
