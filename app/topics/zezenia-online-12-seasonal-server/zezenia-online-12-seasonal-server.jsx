import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-seasonal-server');
}

export default function ZezeniaOnline12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-seasonal-server" />;
}
